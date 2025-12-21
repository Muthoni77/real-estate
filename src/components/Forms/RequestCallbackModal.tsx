import RequestCallbackForm from "./RequestCallbackForm";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function RequestCallbackModal({ onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
    <div className="relative w-full max-w-md bg-white rounded-2xl p-6 max-h-[90vh] overflow-y-auto">

        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-black"
        >
          ✕
        </button>

        <h3 className="mb-2 text-xl font-semibold">
          Request a Call Back
        </h3>
        <p className="mb-4 text-sm text-gray-500">
          Leave your details and we’ll contact you shortly
        </p>

        <RequestCallbackForm />
      </div>
    </div>
  );
}
