"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import Image from "next/image"
import FormField from "./FormField"
import Link from "next/link"

const AuthForm = ({ type }: { type: FormType }) => {
    const authFormSchema = (type: FormType) => {
        return z.object({
            name: type === "sign-up" ? z.string().min(2) : z.string().optional(),
            email: z.string().email(),
            password: z.string().min(3)
        })
    }

    const form = useForm<z.infer<typeof authFormSchema>>({
        resolver: zodResolver(authFormSchema),
        defaultValues: {
            name: "",
            email: "",
        },
    })


    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    const isSignIn = type === "sign-in"

    return (
        <div className="card-border lg:min-w[566px]">
            <div className="flex flex-col gap-6 card py-14 px-10">
                <div className="flex flex-row gap-2 justify-center">
                    <Image src={"/logo.svg"} alt={"logo"} height={32} width={38} />
                    <h1 className="text-primary-100">PrepWise</h1>
                </div>
                <h3>Practice job interviews with AI</h3>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-4 form">
                        {!isSignIn && <p>Name</p>}
                        <p>Email</p>
                        <p>Password</p>
                        {/* <FormField form={form} /> */}
                        <Button type="submit" className="btn">{isSignIn ? "Sign In" : "Create an Account"}</Button>
                    </form>
                </Form>
                <p className="text-center">
                    {isSignIn ? "No account yet?" : "Have an Account already"}
                    <Link href={!isSignIn ? "/sign-in" : "/sign-up"} className="font-bold text-user-primary ml-1">{!isSignIn ? "Sign In" : "Sign Up"}</Link>
                </p>
            </div>
        </div>
    )
}

export default AuthForm