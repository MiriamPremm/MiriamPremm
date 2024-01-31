import ListItem from "../../components/ListItem";

export default function ScanQrCode({
    searchParams
}: {
    searchParams: {
        type: string;
        personName: string;
    }
}) {


    return (
        <div className="list">
            <ListItem 
            iconType={searchParams.type} 
            personName={searchParams.personName} 
            timestamp={new Date()} 
            />
        </div>
    )
}