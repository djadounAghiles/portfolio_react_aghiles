import React, { useState } from "react";
import Title from "../layouts/Title";

const Testimonial = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [comment, setComment] = useState("");
  const [testimonials, setTestimonials] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validation du nom, de l'e-mail, du numéro de téléphone et du commentaire...
    if (name.length < 3) {
      setErrMsg("Name must have at least 3 characters!");
      return;
    }

    const emailRegex = /^[\w-.]+@(gmail\.com|hotmail\.com)$/;
    if (!emailRegex.test(email)) {
      setErrMsg("Email must be a valid Gmail or Hotmail address!");
      return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      setErrMsg("Phone number must be a 10-digit number!");
      return;
    }

    if (comment.trim() === "") {
      setErrMsg("Please write a comment!");
      return;
    }

    if (editMode) {
      const editedTestimonial = {
        name,
        email,
        phoneNumber,
        comment,
      };
      const updatedTestimonials = [...testimonials];
      updatedTestimonials[editIndex] = editedTestimonial;
      setTestimonials(updatedTestimonials);
      setEditMode(false);
      setEditIndex(null);
    } else {
      const newTestimonial = {
        name,
        email,
        phoneNumber,
        comment,
      };
      setTestimonials([...testimonials, newTestimonial]);
    }

    setName("");
    setEmail("");
    setPhoneNumber("");
    setComment("");
    setErrMsg("");
  };

  const handleDeleteTestimonial = (index) => {
    const updatedTestimonials = [...testimonials];
    updatedTestimonials.splice(index, 1);
    setTestimonials(updatedTestimonials);
  };

  const handleEditTestimonial = (index) => {
    const testimonialToEdit = testimonials[index];
    setName(testimonialToEdit.name);
    setEmail(testimonialToEdit.email);
    setPhoneNumber(testimonialToEdit.phoneNumber);
    setComment(testimonialToEdit.comment);
    setEditMode(true);
    setEditIndex(index);
  };

  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title des="Testimonial" />
      </div>
      <div className="max-w-6xl mx-auto">
        <form onSubmit={handleFormSubmit} className="max-w-lg mx-auto mt-8">
          <div className="flex flex-col gap-4">
            <label htmlFor="fullName" className="text-gray-500">
              Full Name:
            </label>
            <input
              id="fullName"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="contactInput px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <label htmlFor="email" className="text-gray-500">
              Email:
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="contactInput px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <label htmlFor="phoneNumber" className="text-gray-500">
              Phone Number:
            </label>
            <input
              id="phoneNumber"
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="contactInput px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="comment" className="text-gray-500">
              Comment:
            </label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="contactTextArea px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              rows="4"
            ></textarea>
          </div>

          {errMsg && <p className="text-red-500 mt-2">{errMsg}</p>}
          <button
            type="submit"
            className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent my-2"
          >
            {editMode ? "Save" : "Submit"}
          </button>
        </form>
        <div className="max-w-6xl mx-auto mt-8">
          <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
          {testimonials.length > 0 ? (
            <div className="grid grid-cols-3 gap-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-item">
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                  <p className="testimonial-email">{testimonial.email}</p>
                  <p className="testimonial-phone">{testimonial.phoneNumber}</p>
                  <p className="testimonial-comment">{testimonial.comment}</p>
                  <div className="testimonial-buttons">
                    {editMode && editIndex === index ? (
                      <button
                        className="testimonial-save"
                        onClick={handleFormSubmit}
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent my-2"
                        onClick={() => handleEditTestimonial(index)}
                      >
                        Edit
                      </button>
                    )}
                    <button
                      className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent my-2"
                      onClick={() => handleDeleteTestimonial(index)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No testimonials available</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
