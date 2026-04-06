import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper();

const colums = [
    columnHelper.accessor('name'),
    columnHelper.accessor('phone'),
    columnHelper.accessor('email'),
    columnHelper.accessor('address')
];





const CustomerList = () => {



    return (
        <div>customer list</div>
    )
}

export default CustomerList;