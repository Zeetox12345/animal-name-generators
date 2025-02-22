
import React, { useCallback } from 'react'
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { supabase } from "@/integrations/supabase/client"

export function NameImporter() {
  const { toast } = useToast()

  const handleFileSelect = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    try {
      const fileContent = await file.text()
      const jsonData = JSON.parse(fileContent)

      const { error } = await supabase.functions.invoke('import-names', {
        body: jsonData
      })

      if (error) throw error

      toast({
        title: "Success!",
        description: "Names have been imported successfully.",
      })
    } catch (error) {
      console.error('Error importing names:', error)
      toast({
        title: "Error",
        description: "Failed to import names. Please check your JSON file format.",
        variant: "destructive",
      })
    }
  }, [toast])

  return (
    <div className="p-4 border rounded-lg bg-card">
      <h2 className="text-lg font-semibold mb-4">Import Animal Names</h2>
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Upload a JSON file with your animal names. The file should be formatted like this:
        </p>
        <pre className="p-4 bg-muted rounded-md text-sm">
{`{
  "animal": "ant",
  "names": {
    "male": ["Name1", "Name2", "Name3"],
    "female": ["Name4", "Name5", "Name6"]
  }
}`}
        </pre>
        <div className="flex items-center gap-4">
          <Button asChild>
            <label className="cursor-pointer">
              Choose JSON File
              <input
                type="file"
                accept="application/json"
                className="hidden"
                onChange={handleFileSelect}
              />
            </label>
          </Button>
        </div>
      </div>
    </div>
  )
}
