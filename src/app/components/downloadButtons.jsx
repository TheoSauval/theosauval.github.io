// components/DownloadButton.js
export default function DownloadButton() {
  return (
    <a
      href="cv.pdf" // Assurez-vous que le chemin est correct
      download
      className="flex items-center px-4 py-2 bg-gray-100 text-black rounded-md shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
    >
      Télécharger CV
    </a>
  );
}
