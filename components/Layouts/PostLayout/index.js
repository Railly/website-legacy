import Heading from "components/Markdown/Heading";
import Text from "components/Markdown/Text";

export default function Layout({ meta, children }) {
  return (
    <>
      <Heading.H1>{meta.title}</Heading.H1>
      <div className="flex justify-center bg-blue-50 w-56 rounded-md mt-2 dark:bg-gray-700">
        <Text className="text-blue-500 font-medium dark:text-gray-200">{`${meta.author} - ${meta.date}`}</Text>
      </div>
      {children}
    </>
  );
}
