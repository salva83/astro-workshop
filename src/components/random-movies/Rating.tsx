
import { actions } from "astro:actions";
import { useEffect, useState, type FC } from "preact/compat";

const Rating: FC<{
    id: string;
}> = ({ id }) => {
    const [rate, setRate] = useState<"bad" | "good" | "none">("none");

    useEffect(() => {
        actions.rate({
            id,
            rate,
        });
    }, [rate]);

    return (
        <div className="flex flex-row gap-2">

        </div>
    );
};

export default Rating;
