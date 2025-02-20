import {ArrowRight, Copy, Mail} from 'lucide-react'
import { Button } from "@/components/Button/button";
import { IconButton } from '@/components/IconButton/iconButton';
import {  InputField, InputIcon, InputRoot } from '@/components/Input/input';

export default function Home() {
  return (
    <main>
      <Button type='submit'>
        Enviar
      <ArrowRight/>
     </Button>

   <IconButton>
    <Copy/>
   </IconButton>

<div>
  <InputRoot>
  <InputIcon>
  <Mail className="size-5"/>
  </InputIcon>
  <InputField/>
  </InputRoot>
</div>
    
    </main>
  );
}
