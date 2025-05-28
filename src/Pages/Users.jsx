import { ArrowUpDown, Edit, Trash2, MoreHorizontal } from "lucide-react";
import { Outlet } from "react-router-dom";
import { DataTableDemo } from "../components/DataTable";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createAdmin, deleteUsers, editUsers, fetchUsers } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Modal from "@/components/Modal";
import { useForm } from 'react-hook-form';

const Users = () => {
    const [globalFilter, setGlobalFilter] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [editingUserId, setEditingUserId] = useState(null);

    const queryClient = useQueryClient();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm({
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            address: '',
            role: 'admin',
            password: ''
        }
    });

    const { data, isLoading, error } = useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers,
    });


    const createMutation = useMutation({
        mutationFn: (data) => createAdmin(data),
        onSuccess: (data) => {
            queryClient.invalidateQueries(["users"]);
            setIsModalOpen(false);

        },
        onError: (error) => {
        },
    })

    const updateMutation = useMutation({
        mutationFn: ({ id, data }) => editUsers(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries(["users"]);
            setIsModalOpen(false);
            setEditingUserId(null);
        },
        onError: (error) => {
            console.error('Error updating user:', error);
        },
    });

    const deleteMutation = useMutation({
        mutationFn: ({ id }) => deleteUsers(id),
        onSuccess: () => {
            queryClient.invalidateQueries(["users"]);
            setDeleteModalOpen(false);
            setEditingUserId(null);
        },
        onError: (error) => {
            console.error('Error updating user:', error);
        },
    });



    const onSubmit = async (data) => {
        try {
            if (editingUserId) {
                await updateMutation.mutateAsync({ id: editingUserId, data: data });
            }
            else {

                await createMutation.mutateAsync(data);
                reset();
            }
        } catch (error) {
            console.error('Error creating user:', error);
            alert('Error creating user. Please try again.');
        }
    };


    const handleCancel = () => {
        setIsModalOpen(false);
        setEditingUserId(null); // ensure edit mode is cleared
        reset({
            name: '',
            email: '',
            phone: '',
            address: '',
            password: '',
            role: 'admin',
        });
    };
    const handleFilterClick = () => {
        console.log("Filter clicked");
    };

    const handleDelete = (user) => {
        setEditingUserId(user);
        setDeleteModalOpen(true)
        console.log(user, 'fsd');

    }







    const handleEdit = (user) => {
        reset(user)
        setEditingUserId(user._id);
        setIsModalOpen(true)
    }

    const columns = [
        //     {
        //         id: "select",
        //         header: ({ table }) => (
        //             <Checkbox
        //                 checked={
        //                     table.getIsAllPageRowsSelected() ||
        //                     (table.getIsSomePageRowsSelected() && "indeterminate")
        //                 }
        //                 onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        //                 aria-label="Select all"
        //             />
        //         ),
        //         cell: ({ row }) => (
        //             <Checkbox
        //                 checked={row.getIsSelected()}
        //                 onCheckedChange={(value) => row.toggleSelected(!!value)}
        //                 aria-label="Select row"
        //             />
        //         ),
        //         enableSorting: false,
        //         enableHiding: false,
        //     },
        {
            accessorKey: "name",
            header: "Name",
            cell: ({ row }) => row.getValue("name"),
        },
        {
            accessorKey: "email",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Email <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
        },
        {
            accessorKey: "phone",
            header: "Phone",
            cell: ({ row }) => row.getValue("phone"),
        },
        {
            accessorKey: "role",
            header: "Role",
            cell: ({ row }) => <div className="capitalize">{row.getValue("role")}</div>,
        },
        {
            accessorKey: "is_verified",
            header: "Verified",
            cell: ({ row }) => (
                <div>{row.getValue("is_verified") ? "✅" : "❌"}</div>
            ),
        },
        {
            accessorKey: "address",
            header: "Address",
            cell: ({ row }) => row.getValue("address"),
        },
        {
            accessorKey: "nickname",
            header: "Nickname",
            cell: ({ row }) => row.getValue("nickname"),
        },
        {
            accessorKey: "verification_otp",
            header: "OTP",
            cell: ({ row }) => row.getValue("verification_otp"),
        },
        {
            accessorKey: "_id",
            header: "ID",
            cell: ({ row }) => (
                <div className="truncate max-w-[200px]">{row.getValue("_id")}</div>
            ),
        },
        // Actions column
        {
            id: "actions",
            header: "Actions",
            cell: ({ row }) => {
                const user = row.original;

                return (
                    <div className="flex gap-2">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleEdit(user)}
                        >

                            <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDelete(user._id)}
                        >
                            <Trash2 className="h-4 w-4 text-red-600" />
                        </Button>
                    </div>
                );
            },
            enableSorting: false,
            enableHiding: false,
        }

    ];


    if (isLoading) {
        return (
            <div className="flex flex-1">
                <div className="p-2 md:p-10 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
                    <div className="flex items-center justify-center h-32">
                        <div>Loading users...</div>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-1">
                <div className="p-2 md:p-10 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
                    <div className="flex items-center justify-center h-32">
                        <div className="text-red-500">Error loading users: {error.message}</div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="flex flex-1">
                <div className="p-2 md:p-10 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
                    <Outlet />
                    <div className="flex items-center justify-between py-4">
                        <Input
                            placeholder="Search users..."
                            value={globalFilter ?? ""}
                            onChange={(event) => setGlobalFilter(event.target.value)}
                            className="max-w-sm"
                        />
                        <div className="flex gap-2">
                            <Button onClick={() => {

                                reset()
                                setIsModalOpen(true)
                            }
                            }>Create</Button>
                            <Button onClick={handleFilterClick}>Filter</Button>
                        </div>
                    </div>
                    <DataTableDemo
                        columns={columns || []}
                        data={data?.data || []}
                        globalFilter={globalFilter}
                        setGlobalFilter={setGlobalFilter}
                    />
                </div>
            </div>


            <Modal
                isOpen={isModalOpen}
                onClose={handleCancel}
                title={editingUserId ? "Edit User" : "Create User"}
                size="lg"
                showCloseButton={true}
                closeOnBackdrop={true}
                closeOnEscape={true}
            >
                <div className="space-y-4">
                    {/* Name Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Name *
                        </label>
                        <input
                            type="text"
                            {...register("name", {
                                required: "Name is required",
                                minLength: {
                                    value: 2,
                                    message: "Name must be at least 2 characters"
                                }
                            })}
                            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.name ? 'border-red-500' : 'border-gray-300'
                                }`}
                            placeholder="Enter your name"
                        />
                        {errors.name && (
                            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                        )}
                    </div>

                    {/* Email Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email *
                        </label>
                        <input
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Please enter a valid email address"
                                }
                            })}
                            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.email ? 'border-red-500' : 'border-gray-300'
                                }`}
                            placeholder="Enter your email"
                        />
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Phone Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone
                        </label>
                        <input
                            type="tel"
                            {...register("phone", {
                                pattern: {
                                    value: /^[\+]?[1-9][\d]{0,15}$/,
                                    message: "Please enter a valid phone number"
                                }
                            })}
                            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.phone ? 'border-red-500' : 'border-gray-300'
                                }`}
                            placeholder="Enter your phone number"
                        />
                        {errors.phone && (
                            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                        )}
                    </div>

                    {/* Address Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Address
                        </label>
                        <input
                            type="text"
                            {...register("address")}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter your address"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            {...register("password")}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"

                        />
                    </div>

                    {/* Role Field */}
                    {/* <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Role *
                        </label>
                        <div className="space-y-2">
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    value="fan"
                                    {...register("role", { required: "Role is required" })}
                                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <span className="text-gray-700">Fan</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    value="management"
                                    {...register("role", { required: "Role is required" })}
                                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <span className="text-gray-700">Management</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    value="admin"
                                    {...register("role", { required: "Role is required" })}
                                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <span className="text-gray-700">Admin</span>
                            </label>
                        </div>
                        {errors.role && (
                            <p className="mt-1 text-sm text-red-600">{errors.role.message}</p>
                        )}
                    </div> */}

                    {/* Action Buttons */}
                    <div className="flex justify-end space-x-3 pt-4">
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
                            disabled={isSubmitting}
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            onClick={handleSubmit(onSubmit)}
                            disabled={isSubmitting}
                            className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Creating...' : 'Submit'}
                        </button>
                    </div>
                </div>
            </Modal>
            <Modal
                isOpen={deleteModalOpen}
                onClose={() => setDeleteModalOpen(false)}
                title="Delete User"
                size="sm"
                showCloseButton={true}
                closeOnBackdrop={true}
                closeOnEscape={true}
            >
                <div className="p-4">
                    <p>Are you sure you want to delete this user?</p>
                    <div className="mt-4 flex justify-end gap-2">
                        <Button variant="outline" onClick={() => setDeleteModalOpen(false)}>
                            Cancel
                        </Button>
                        <Button variant="destructive" onClick={() => {
                         
                                deleteMutation.mutate({ id: editingUserId });
                      
                        }}
                        >
                            Confirm Delete
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Users;