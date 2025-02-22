
import { NameGenerator } from "@/components/NameGenerator"
import { Layout } from "@/components/Layout"
import { NameImporter } from "@/components/NameImporter"

export default function BatPage() {
  return (
    <Layout>
      <div className="container max-w-4xl space-y-8 py-8">
        <NameImporter />
        <NameGenerator animal="bat" />
      </div>
    </Layout>
  )
}
