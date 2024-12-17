import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DMCA = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-primary/10 to-background p-6">
        <div className="max-w-4xl mx-auto prose prose-purple">
          <h1 className="text-4xl font-bold text-primary mb-8">DMCA Policy</h1>
          
          <p className="text-lg mb-6">
            Spell Check Game respects the intellectual property rights of others and expects its users to do 
            the same. In accordance with the Digital Millennium Copyright Act of 1998, we will respond 
            expeditiously to claims of copyright infringement.
          </p>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">DMCA Notice Requirements</h2>
          <p className="text-lg mb-6">
            If you believe that your copyrighted work has been copied in a way that constitutes copyright 
            infringement and is accessible on our website, please notify our copyright agent. For your 
            complaint to be valid under the DMCA, you must provide the following information:
          </p>

          <ul className="list-disc pl-6 text-lg space-y-2">
            <li>A physical or electronic signature of a person authorized to act on behalf of the copyright owner</li>
            <li>Identification of the copyrighted work claimed to have been infringed</li>
            <li>Identification of the material that is claimed to be infringing</li>
            <li>Information reasonably sufficient to permit us to contact you</li>
            <li>A statement that you have a good faith belief that use of the material is not authorized</li>
            <li>A statement that the information is accurate and that you are the copyright owner or authorized to act on their behalf</li>
          </ul>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Contact Information</h2>
          <p className="text-lg mb-6">
            Please send your DMCA notices to: dmca@spellcheckgame.online
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DMCA;