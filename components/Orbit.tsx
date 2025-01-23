import { Planet } from "./Planet";

export const Orbit = () => {
    return <div className="orbit-container">
        <div className="orbit-1"></div>
        <div className="orbit-2"></div>
        <div className="orbit-3"></div>
        <div className="orbit-4"></div>
        <div className="orbit-5"></div>
        <img src="https://i.imgur.com/ck7eriI.png" className="earth" />
        <Planet />
    </div>;
}