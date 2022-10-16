import { useState } from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import { toast } from "react-toastify";
import CustomFooter from "../components/CustomFooter";
import CustomNavbar from "../components/CustomNavbar";
import Head from "next/head";

const Contact = () => {
    const [currentForm, setCurrentForm] = useState("normal"); // normal, city
    const [city, setCity] = useState(null);
    const [disabled, setDisabled] = useState(false);

    const formSubmit = (e) => {
        e.preventDefault();
        if (!city) {
            return toast.error("Please select a city");
        }
        const data = JSON.stringify({ ...Object.fromEntries(new FormData(e.target)), city });
        console.log(data);
        fetch("/api/volunteer", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: data,
        })
            .then((res) => res.json())
            .then(({ error }) => {
                if (error) throw "server error";
                toast.success("Form submitted");
                setDisabled(true);
            })
            .catch((e) => {
                console.log(e);
                toast.error("Server error");
            });
    };

    const onCity = (e) => {
        if (e.target.className.includes("dropdown-item")) {
            console.log(e.target);
            setCity(e.target.innerText);
        }
        // console.log(e);
    };

    return (
        <>
            <Head>
                <title>Ayka | Volunteer</title>
            </Head>
            <CustomNavbar />
            <Container
                fluid
                className="d-flex flex-grow-1 align-items-center text-white py-8 flex-column flex-xl-row px-xl-6 px-3 contact-container"
            >
                <Col
                    data-aos="fade-up"
                    xs={12}
                    xl={6}
                    className="d-flex flex-column gap-3 pe-xl-5  mb-5 mb-xl-0 text-center text-xl-start"
                    style={{ maxWidth: "85%" }}
                >
                    <h2 className="gentium display-6">Contact Us</h2>
                    <p>
                        Ayka is a volunteer-driven organisation, and we are always on the lookout for talent, commitment
                        and passionate individuals. To join us or to work with us, get in touch with this form now!
                    </p>
                    <p>
                        <i className="fa-regular fa-envelope"></i>
                        &nbsp;&nbsp;aykaforthepeople@gmail.com
                    </p>
                </Col>
                <Col data-aos="fade-up" xs={12} xl={6} className="bg-white text-black p-4 p-sm-5">
                    <h2 className="gentium display-6 mb-5">Write To Us</h2>
                    <form className="custom-form d-flex flex-column gap-4" onSubmit={formSubmit}>
                        <input
                            type="text"
                            placeholder="Name / Organization Name"
                            required
                            className="w-100"
                            name="name"
                        />
                        <div className="d-flex gap-4 flex-column flex-sm-row">
                            <input type="text" placeholder="Email" required className="w-100" name="email" />
                            <input type="text" placeholder="Phone" className="w-100" name="phone" />
                        </div>
                        <textarea
                            type="text"
                            placeholder="Message"
                            className="w-100"
                            required
                            style={{ height: "10rem", resize: "none" }}
                            name="message"
                        ></textarea>
                        <input type="text" name="type" value="normal" readOnly hidden />
                        <Dropdown>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                {city || "Select City"}
                            </Dropdown.Toggle>
                            <Dropdown.Menu onClick={onCity}>
                                <Dropdown.Item value="delhi">Delhi NCR</Dropdown.Item>
                                <Dropdown.Item value="kolkata">Kolkata</Dropdown.Item>
                                <Dropdown.Item value="mumbai">Mumbai</Dropdown.Item>
                                <Dropdown.Item value="mumbai">Pune</Dropdown.Item>
                                <Dropdown.Item value="mumbai">Bangalore</Dropdown.Item>
                                <Dropdown.Item value="mumbai">Chennai</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <div>
                            Don&apos;t see your city listed? Fill{" "}
                            <span
                                className="text-primary text-decoration-underline pointer"
                                style={{ cursor: "pointer" }}
                                onClick={() => setCurrentForm("city")}
                            >
                                this form
                            </span>{" "}
                            to bring Ayka to your city and lead the change
                        </div>
                        <input type="submit" value="Submit" className="align-self-end mt-4" disabled={disabled} />
                    </form>
                </Col>
            </Container>

            <CustomFooter />
        </>
    );
};

export default Contact;
