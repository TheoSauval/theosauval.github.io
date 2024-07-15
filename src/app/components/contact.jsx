// components/Contact.js

export default function Contact() {
  return (
    <div className="bg-gray-900 text-white p-8 rounded-lg max-w-xl mx-auto">
      <h2 className="text-xl font-bold">Theo Sauval</h2>
      <p className="text-gray-400">Lille - 59000</p>

      <div className="mt-4 space-y-4">
        <div className="flex items-center">
          <input
            type="text"
            value="theosauval.work@gmail.com"
            readOnly
            className="bg-gray-800 text-white rounded-lg p-2 w-full"
          />
          {/* <ClipboardIcon className="w-6 h-6 text-gray-400 ml-2 cursor-pointer" /> */}
          {/* <MailIcon className="w-6 h-6 text-gray-400 ml-2 cursor-pointer" /> */}
        </div>

        <div className="flex items-center">
          <input
            type="text"
            value="06 58 80 27 01"
            readOnly
            className="bg-gray-800 text-white rounded-lg p-2 w-full"
          />
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold">Social Networks</h3>
        <div className="flex space-x-4 mt-2">
          <a href="https://www.linkedin.com/in/theo-sauval-402884244/" target="_blank" rel="noopener noreferrer">
            <div>
                <h2 className="underline underline-offset-4 text-teal-600">Linkedin</h2>
            </div>
          </a>
          <a href="https://github.com/TheoSauval" target="_blank" rel="noopener noreferrer">
            <div>
                <h2 className="underline underline-offset-4 text-teal-600">GitHub</h2>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
