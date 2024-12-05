import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from 'react';

export const UserCreateDialog = ({ open, setCreateModalOpen }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const sendForm = async () => {
    const res = await fetch('api/users', {
      method: 'POST',
      body: JSON.stringify({
        firstname: firstName,
        lastname: lastName,
        email: email,
      }),
    });
    console.log(res);
    setCreateModalOpen(false);
  };
  console.log({firstName, lastName, email});
  return (
    <Dialog open={open} onOpenChange={setCreateModalOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create user</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">

            <Label htmlFor="name">First Name</Label>
            <Input 
              onChange={(e)=>{
                setFirstName(e.target.value);
              }}  
              id="name"
              defaultValue="Pedro Duarte" 
              value={firstName}
            />
          </div> 

          <div className="grid gap-2">
            <Label htmlFor="username">Last Name</Label>
            <Input 
            onChange={(e)=>{
              setLastName(e.target.value);
            }}
            id="username" 
            defaultValue="@peduarte"
            value={lastName}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="username">Email</Label>
            <Input 
            onChange={(e)=>{
              setEmail(e.target.value);
            }}
            id="email" 
            type="email"
            defaultValue="@peduarte"
            value={email} 
            /> 
          </div>
        </div>

        <DialogFooter>
          <Button onClick={() => onClose(false)} variant="outline" type="button">
            Cancel
          </Button>
          <Button type="submit">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
