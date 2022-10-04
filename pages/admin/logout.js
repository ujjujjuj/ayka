import Cookies from "cookies";

const Logout = () => {
    return <></>;
};

export function getServerSideProps({ req, res }) {
    const cookies = new Cookies(req, res);
    cookies.set("auth", "", { maxAge: 0 });
    return {
        redirect: {
            destination: "/admin/login",
        },
    };
}

export default Logout;
