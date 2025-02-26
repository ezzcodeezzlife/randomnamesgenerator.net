import { metadata } from "next";



export default function Legal() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-8 text-gray-800">
          Legal Information
        </h1>
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Terms of Service</h2>
          <p className="text-gray-600 text-lg mb-4">
          appsplosion.help@gmail.com <br></br>By accessing and using our website, you agree to comply with our Terms of Service. These terms outline your
            responsibilities, restrictions, and the legal obligations governing the use of our services.
          </p>
          <p className="text-gray-600 text-lg mb-4">
            Our platform is provided "as is," without warranties of any kind. We reserve the right to modify or terminate
            our services at any time without notice. Any misuse or violation of these terms may result in account suspension
            or legal action.
          </p>
          <p className="text-gray-600 text-lg">
            We are not liable for any indirect, incidental, or consequential damages arising from your use of our services.
            Please read the full Terms of Service for complete details.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Privacy Policy</h2>
          <p className="text-gray-600 text-lg mb-4">
            Your privacy is of utmost importance to us. We collect, store, and process data in accordance with industry
            standards and applicable laws. This includes information gathered from cookies, log files, and third-party services
            such as Google Analytics and AdSense.
          </p>
          <p className="text-gray-600 text-lg mb-4">
            We may share anonymized or aggregated data with third-party advertisers and analytics providers to improve user
            experience and site performance. Personal information is never sold or shared without your explicit consent,
            except where required by law.
          </p>
          <p className="text-gray-600 text-lg">
            By using our site, you consent to our data collection practices, including tracking for advertising and
            performance analysis. For detailed information, please review our full Privacy Policy.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Third-Party Services</h2>
          <p className="text-gray-600 text-lg mb-4">
            Our website integrates third-party services, including but not limited to Vercel, Google Analytics, and Google AdSense,
            to optimize performance and provide relevant advertisements. These services may collect data about your interactions
            with our site.
          </p>
          <p className="text-gray-600 text-lg mb-4">
            Google Analytics helps us analyze user behavior and improve our services, while AdSense enables personalized ad
            experiences. You can manage your ad preferences through Google’s Ad Settings.
          </p>
          <p className="text-gray-600 text-lg">
            For more information about how third-party services handle your data, please review their respective privacy
            policies. 
          </p>
        </section>
      </div>
    </main>
  );
}