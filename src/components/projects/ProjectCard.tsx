import Link from "next/link";
import Tag from "@/components/ui/Tag";

type ProjectCardProps = {
  title: string;
  tags: string[];
  description: string;
  imgUrl: string;
  pageUrl: string;
}

export default function ProjectCard({ title, tags, description, imgUrl, pageUrl }: ProjectCardProps) {
  return (
    <Link href={pageUrl} className="flex flex-col h-full border border-border-light rounded-xl overflow-hidden hover:-translate-y-2 btn-glow transition-all ease-in-out duration-300">
      <div className="h-100">
        <img src={imgUrl} alt={`${title}, cover image`} className="w-full h-full object-cover object-center opacity-80" />
      </div>

      <div className="flex flex-col gap-8 p-4 md:p-6 lg:p-8">
        <div className="flex flex-col gap-4">
          <h2>{title}</h2>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Tag key={tag} text={tag} />
            ))}
          </div>
        </div>

        <p>{description}</p>
      </div>
    </Link>
  )
}
