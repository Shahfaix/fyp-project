'use client';
import React from 'react'
import * as z from 'zod'
import {useForm} from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema=z.object({
    emailAddress: z.string().email()
})
export default function validation  ()  {
  const form =useForm<z.infer<typeof formSchema>>({
    resolver:zodResolver(formSchema),
    defaultValues:{
      emailAddress:""

    }
  });
  return (
    <div>
      
    </div>
  )
}

