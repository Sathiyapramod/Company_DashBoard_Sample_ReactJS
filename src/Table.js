export function Table(){
    return (
        <div className="d-flex justify-content-center">
            <div className="d-flex flex-column flex-wrap table bg-light p-2 gap-2 m-2 justify-content-center align-items center">
                <div className="bg-primary text-white box rounded-2 pt-4 border-2">Primary</div>
                <div className="bg-secondary text-white box rounded-2 p-4 border-2">Secondary</div>
                <div className="bg-success text-white box rounded-2 p-4 border-2">success</div>
                <div className="bg-danger text-white box rounded-2 p-4 border-2">Danger</div>
                <div className="bg-warning text-white box rounded-2 p-4 border-2">warning</div>
                <div className="bg-info text-white box rounded-2 p-4 border-2">Info</div>
                <div className="bg-light text-dark box rounded-2 p-4 border-2">Light</div>
                <div className="bg-dark text-white box rounded-2 p-4 border-2">Dark</div>
            </div>
        </div>
    );
}