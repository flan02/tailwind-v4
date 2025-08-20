import ReactMarkdown from 'react-markdown';
import { blogContent } from "../../dummy-files/content";

type Props = {}

const Prose = (props: Props) => {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <article className="prose dark:prose-invert lg:prose-lg xl:prose-xl mx-auto max-w-4xl">
        <ReactMarkdown>{blogContent}</ReactMarkdown>
      </article>
    </div>
  );
}

export default Prose