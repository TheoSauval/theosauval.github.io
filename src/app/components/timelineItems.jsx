// components/TimelineItem.js
export default function TimelineItem({ title, institution, duration }) {
  return (
    <div className="flex items-center py-4">
      <div className="flex-shrink-0 w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-gray-400">{institution}</p>
        <p className="text-gray-400">{duration}</p>
      </div>
    </div>
  );
}
