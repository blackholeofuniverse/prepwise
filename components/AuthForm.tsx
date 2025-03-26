"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { z } from "zod"
import Image from "next/image"
import FormField from "./FormField"
import Link from "next/link"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

const authFormSchema = (type: FormType) => {
    return z.object({
        name: type === "sign-up" ? z.string().min(2) : z.string().optional(),
        email: z.string().email(),
        password: z.string().min(3)
    })
}

const AuthForm = ({ type }: { type: FormType }) => {

    const formSchema = authFormSchema(type)
    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    })


    function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            if (type === "sign-up") {
                toast.success('Account created successfully. Please sign in.')
                router.push('/sign-in')
            } else {
                toast.success('Sign in successfully. Please sign in.')
                router.push('/')
            }
        } catch (error) {
            console.log(error);
            toast.error(`There was an error: ${error}`)
        }
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
                        {!isSignIn && (
                            <FormField control={form.control} label="Name" type="text" name={"name"} placeholder="Your Name" />
                        )}
                        <FormField control={form.control} label="Email" type="email" name={"email"} placeholder="Your email address" />
                        <FormField control={form.control} label="Password" type="password" name={"password"} placeholder="Enter your password" />
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