import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { Eye, Mail, MapPinHouse, Pencil, Phone, Trash2Icon, User } from "lucide-react";
import { useState } from "react";

const columnHelper = createColumnHelper();

const columns = [

     columnHelper.display({
        id: 'actions',
        header: 'Actions',
        cell: ({ row }) => (
            <div className="flex items-center gap-2">

                {/* View / Redirect */}
                <button
                    onClick={() => handleView(row.original)}
                    className="p-1.5 rounded hover:bg-blue-50 text-blue-500 hover:text-blue-700 transition-colors"
                    title="View"
                >
                    <Eye size={16} />
                </button>

                {/* Edit */}
                <button
                    onClick={() => handleEdit(row.original)}
                    className="p-1.5 rounded hover:bg-yellow-50 text-yellow-500 hover:text-yellow-700 transition-colors"
                    title="Edit"
                >
                    <Pencil size={16} />
                </button>

                {/* Delete */}
                <button
                    onClick={() => handleDelete(row.original)}
                    className="p-1.5 rounded hover:bg-red-50 text-red-500 hover:text-red-700 transition-colors"
                    title="Delete"
                >
                    <Trash2Icon size={16} />
                </button>

            </div>
        )
    }),

    columnHelper.accessor('name',   {
         header: () => (
            <span className='flex items-center'>
                <User className='mr-2' size={16}/> NAME
            </span>
         ) 
    }),
    
    columnHelper.accessor('phone',   { 
        header: () => (
            <span className='flex items-center'>
                <Phone className='mr-2' size={16}/> Phone
            </span>
        ) 
    }),
    columnHelper.accessor('email',   { 
        header:() => (
            <span className='flex items-center'>
                <Mail className='mr-2' size={16}/> Email
            </span>
        ) 
    }),
    columnHelper.accessor('address', {
         header: () => (
              <span className='flex items-center'>
                <MapPinHouse className='mr-2' size={16}/> Email
            </span>
         )
    }),

];

// Sample data
const sampleData = [
    { name: 'Alice Johnson', phone: '(555) 123-4567', email: 'alice@example.com', address: '123 Main St, NY' },
    { name: 'Bob Smith',     phone: '(555) 234-5678', email: 'bob@example.com',   address: '456 Oak Ave, CA' },
    { name: 'Carol White',   phone: '(555) 345-6789', email: 'carol@example.com', address: '789 Pine Rd, TX' },
];

const CustomerList = () => {

    const [data, setData] = useState(() => sampleData);

    const customerListTable = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel()
    });

    return (
        <div className="flex flex-col min-h-screen max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">

            <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                <table className='min-w-full divide-y divide-gray-200'>

                    <thead className="bg-gray-50">
                        {customerListTable.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th key={header.id}
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>

                    <tbody className="bg-white divide-y divide-gray-200">
                        {customerListTable.getRowModel().rows.map((row) => (
                            <tr key={row.id}>
                                {row.getVisibleCells().map((cell) => (
                                    <td key={cell.id} className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default CustomerList;