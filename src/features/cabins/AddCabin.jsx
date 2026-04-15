import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Model from "../../ui/Modal";

function AddCabin() {
  return (
    <div>
      <Model>
        <Model.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Model.Open>
        <Model.Window name="cabin-form">
          <CreateCabinForm />
        </Model.Window>
      </Model>
    </div>
  );
}

// function AddCabin() {
//   const [isOpenModel, setIsOpenModel] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setIsOpenModel((isOpen) => !isOpen)}>
//         Add new cabin
//       </Button>
//       {isOpenModel && (
//         <Model onClose={() => setIsOpenModel(false)}>
//           <CreateCabinForm onCloseModal={() => setIsOpenModel(false)} />
//         </Model>
//       )}
//     </div>
//   );
// }

export default AddCabin;
