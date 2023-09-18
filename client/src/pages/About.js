import React from "react";
import { Link } from "react-router-dom"; 
import TeachTogetherLogo from "../assets/TeachTogetherLogo.png"
export default function About() {
  return (
    <div className="my-3">
      <div className="border border-dark border-2">
        <div>
          <h3 className="card-header border-top border-dark announcement-bg text-dark fs-2">
          <img src={TeachTogetherLogo} className="card-img-top teach-together-logo me-5" alt="TeachTogether Logo" />
              About Us
          </h3>
        </div>
        <div className="bg-light-subtle border-top border-dark py-4">
          <blockquote
            className="p-4"
            style={{
              fontSize: '1.5rem',
              lineHeight: '1.5',
            }}
          >
            Hi Parents and Teachers! We, the TeachTogether team have dedicated valuable time to create an app which will make communication between Teachers and Parents
            convenient and pleasant. This app helps Teachers and Parents communicate about the topics such as academic progess, extracurricular opportunities, guidance, and much more!
            This is also where announcements about school events can be posted so Parents can be in the loop.
          </blockquote>
        </div>
        <div className="bg-light-subtle border-top border-dark py-4">
          <blockquote
            className="p-4"
            style={{
              fontSize: '1.5rem',
              lineHeight: '1.5',
            }}
          >
            We would like to keep developing this application and add more features! Tips would help us be able to develop the app further and make it into 
            a great tool and resource for Teacher and Parents to really help students get the best out of their education. A portion of tips are planned to 
            go towards helping local public schools as well!
          </blockquote>
        </div>
        <Link
          className="btn btn-secondary btn-block rounded-0 fs-5 text-decoration-none"
          to={`/stripeTip`}
        >
          Tip to Help Support the App
        </Link>
      </div>
    </div>
  );
}
