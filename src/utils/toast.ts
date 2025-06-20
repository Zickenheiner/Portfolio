import { toast } from "react-toastify";

const toastSuccess = (title: string) => {
  toast.success(title, {
    position: "top-center",
    autoClose: 2000,
    closeOnClick: true,
    pauseOnHover: true,
    hideProgressBar: true,
    theme: "dark",
  });
};

const toastError = (title: string) => {
  toast.error(title, {
    position: "top-center",
    autoClose: 2000,
    closeOnClick: true,
    pauseOnHover: true,
    hideProgressBar: true,
    theme: "dark",
  });
};

export { toastSuccess, toastError };
