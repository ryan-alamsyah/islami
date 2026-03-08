import { Copyright } from 'lucide-react'

const FooterComponent = () => {
  return (
    <>
      <div className="flex justify-center p-2 items-center">
        <span className="text-slate-300 text-xs flex items-center gap-2" ><Copyright size={12} /> Ryan Alamsyah @2026</span>
      </div>
    </>
  );
};

export default FooterComponent;
