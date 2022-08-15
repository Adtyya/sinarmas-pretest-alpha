export default function GuestLayout({ children }) {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-50">
      {children}
    </div>
  );
}
