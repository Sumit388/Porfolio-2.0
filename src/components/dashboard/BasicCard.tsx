interface Props {
  data: {
    name: string;
    email: string;
    message: string;
    createdAt: string;
    _id: string;
  };
}
export default function BasicCard({ data }: Props) {
  return (
    <div className="w-[300px] flex flex-col justify-center items-start gap-2 elevatedEffect p-4 bg-slate-100 rounded-lg max-h-[300px]">
      <div>
        <p>Name: {data.name}</p>
      </div>
      <div>
        <p>Email: {data.email}</p>
      </div>
      <div>
        <p>Message: {data.message}</p>
      </div>
      <div>
        <p>Date: {data.createdAt}</p>
      </div>
      <div>
        <p>Id: {data._id}</p>
      </div>
    </div>
  );
}
