export default function Contact() {
  return (
    <section className="flex flex-col  items-center px-4 sm:px-6 lg:px-10" id="contact">
      <div className="flex flex-col items-center gap-6 max-w-xl w-full">
        <h4 className="font-bold greenTextColor text-lg">What&apos;s Next?</h4>
        <h3 className="font-semibold text-2xl sm:text-3xl lg:text-4xl whiteGreyTextColor">
          Get In Touch
        </h3>
        <p className="text-center greyTextColor  leading-relaxed text-xs sm:text-sm">
          Let&apos;s Chat! Whether you have a question, a project idea, or just want
          to connect, I&apos;m always happy to hear from you. Drop me a message, and
          I&apos;ll be in touch soon!
        </p>
        <form className="flex flex-col gap-4 w-full ">
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="w-full rounded-md px-3 py-2 bg-white greyTextColor"
            aria-label="Name"
          />
          <input
            type="tel"
            name="contact"
            placeholder="Phone Number"
            className="w-full rounded-md px-3 py-2 bg-white greyTextColor"
            aria-label="Phone Number"
          />
          <textarea
            name="desc"
            placeholder="Your Message"
            rows={5}
            className="w-full rounded-md px-3 py-2 bg-white greyTextColor"
            aria-label="Message"
          ></textarea>
          <div></div>
          <button type="submit" className="custom-button w-fit self-center">
            Say Hello
          </button>
        </form>
      </div>
 
      <p className="whiteGreyTextColor  mt-12">Made with ❤️ by Praveen Singh</p>
    </section>
  );
}