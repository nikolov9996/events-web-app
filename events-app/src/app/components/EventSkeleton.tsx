
const EventSkeleton = () => {
    return <div className="bg-white w-64 rounded-lg shadow-lg m-3 animate-pulse">
        <div className="rounded-t-lg h-36 w-full bg-gray-400"></div>
        <div className="p-2">
            <div className="bg-gray-400 h-4 w-1/2 mb-2"></div>
            <div className="bg-gray-400 h-4 w-1/4"></div>
        </div>
    </div>
}

export default EventSkeleton