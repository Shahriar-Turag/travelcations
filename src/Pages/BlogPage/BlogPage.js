import React from "react";
import "./BlogPage.css";

const BlogPage = () => {
    return (
        <div className="page">
            <div className="question__container">
                <details className="question">
                    <summary className="question__summary">
                        Difference between authentication and authorization:{" "}
                    </summary>
                    <div className="mt-3">
                        <p className="question__answer">
                            lets think of an employee of an organization. The
                            person should have an id and password to enter the
                            organization. If he have the right id and password
                            then he can enter the organization. it is called
                            authentication. and to determine which employye have
                            the access for which floor is called authorization.
                            Simply put, authentication is the process of
                            verifying who someone is, whereas authorization is
                            the process of verifying what specific applications,
                            files, and data a user has access to.
                        </p>
                    </div>
                </details>

                <details className="question">
                    <summary className="question__summary">
                        Why are you using firebase? What other options do you
                        have to implement authentication?{" "}
                    </summary>
                    <div className="mt-3">
                        <p className="question__answer">
                            it gives me real time sync and firebase is easy to
                            setup. authentication using email and password,
                            phone number, google, facebook, apple id and many
                            more. it collects user information and store in the
                            firebase database. it also have the cloud messaging
                            service.
                            <br />
                            Usually, authentication using email and password is
                            common, bt we can also use cards, retina scans,
                            voice recognition, face recognition, fingerprint etc
                        </p>
                    </div>
                </details>

                <details className="question">
                    <summary className="question__summary">
                        What other services does firebase provide other than
                        authentication?{" "}
                    </summary>
                    <div className="mt-3">
                        <p className="question__answer">
                            there are many services that firebase provides us 1.
                            cloud firestone 2. cloud functions 3. Hosting 4.
                            cloud storage 5. Google analytics55 6. Predictions
                            7. cloud messaging 8. Dynamic links 9. Remote config
                        </p>
                    </div>
                </details>
            </div>
        </div>
    );
};

export default BlogPage;
