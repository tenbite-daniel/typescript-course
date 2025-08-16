import { fetchTours } from "./types";
import { useQuery } from "@tanstack/react-query";

export default function Component() {
    const {
        isPending,
        isError,
        error,
        data: tours,
    } = useQuery({
        queryKey: ["tours"],
        queryFn: fetchTours,
    });
    if (isPending) return <h3>Loading...</h3>;
    if (isError) return <h3>Error : {error.message} </h3>;
    return (
        <div>
            <h2 className="mb-1">Tours</h2>
            {tours.map((tour) => {
                return (
                    <p key={tour.id} className="mb-1">
                        {tour.name}
                    </p>
                );
            })}
        </div>
    );
}
