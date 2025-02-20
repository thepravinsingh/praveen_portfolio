export default function Contact() {
  return (
    <div className="flex flex-col justify-center items-center gap-5 px-[100px]">
      <h4 className="font-bold greenTextColor">What's Next?</h4>
      <h3 className="font-semibold text-[36px] whiteGreyTextColor">
        Get In Touch
      </h3>
      <p className="text-center greyTextColor">
        Let&apos;s Chat! Whether you have a question, a project idea, or just
        want to connect, I&apos;m always happy to hear from you. Drop me a
        message, and I&apos;ll be in touch soon!
      </p>
      <input
        type="text"
        placeholder="Name"
        name="name"
        className="w-full rounded-md px-2 py-1 "
      />
      <input
        type="tel"
        name="contact"
        id="name"
        className="w-full rounded-md px-2 py-1 "
      />
      <textarea
        name="desc"
        id="desc"
        rows={5}
        className="w-full rounded-md px-2 py-1 "
      ></textarea>
      <button className="custom-button">Say Hello</button>
    </div>
  );
}
