"use client"

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { userValidation } from "@/lib/validtions/user"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "../ui/input"
import * as z from "zod"
import { Button } from "../ui/button"
import Image from "next/image"
import { ChangeEvent } from "react"
import { Textarea } from "../ui/textarea"
 
interface Props {
    user: {
        id: string,
        objectId: string,
        username: string,
        name: string,
        bio: string,
        image: string
    },
    btnTitle : string
}

export default function AccountProfile({ user, btnTitle }: Props) {
    const form = useForm({
        resolver: zodResolver(userValidation),
        defaultValues: {
            profile_photo: user?.image,
            name: user?.name,
            username: user?.username,
            bio: user?.bio,
        },
    });

    function onSubmit(values: z.infer<typeof userValidation>) {
        console.log(values);
    }

    function handleImage(e: ChangeEvent<HTMLInputElement>, fieldChange: (value: string) => void) {
        e.preventDefault()
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-start gap-10">
                <FormField
                    control={form.control}
                    name="profile_photo"
                    render={({ field }) => (
                        <FormItem className="flex items-center gap-4">
                            <FormLabel className="account-form_image-label overflow-hidden">
                                {field.value ? <Image priority src={field.value} alt="Profile Photo" width={96} height={96} /> : <Image src="assets/profile.svg" alt="Profile Photo" width={24} height={24} />}
                            </FormLabel>
                            <FormControl className="flex-1 text-base-semibold text-gray-200">
                                <Input
                                    type="file"
                                    accept="image/*"
                                    className="account-form_image-input"
                                    placeholder="add profile photo"
                                    onChange={(e) => handleImage(e, field.onChange)}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-base-semibold text-gray-200">Name</FormLabel>
                            <FormControl>
                                <Input className="bg-dark-1 no-focus border-none text-light-1" type="text" placeholder="Name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-base-semibold text-gray-200">Username</FormLabel>
                            <FormControl>
                                <Input className="bg-dark-1 no-focus border-none text-light-1" type="text" placeholder="username" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="bio"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-base-semibold text-gray-200">Bio</FormLabel>
                            <FormControl>
                                <Textarea className="bg-dark-1 no-focus border-none text-light-1" rows={10} placeholder="Your bio" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button className="bg-blue" type="submit">
                    Submit
                </Button>
            </form>
        </Form>
    );
}