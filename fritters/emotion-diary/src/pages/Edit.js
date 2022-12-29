import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  const mode = searchParams.get("mode");
  const navigate = useNavigate();
  console.log("id :", id);
  console.log("mode :", mode);
  return (
    <div>
      <h1>Edit</h1>
      <p>this is Edit</p>
      <button onClick={() => setSearchParams({ who: "mindong" })}>
        QS Change
      </button>
      <button onClick={() => navigate("/home")}>Navigate</button>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default Edit;
