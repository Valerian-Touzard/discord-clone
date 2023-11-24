"use client";

import { Copy, RefreshCcw } from 'lucide-react';

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';

import { useModal } from "@/hooks/use-modal-store";
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';


export const InviteModal = () =>{
    const { isOpen, onClose, type } = useModal();

    const isModalOpen = isOpen && type == "invite";

    return (
        <Dialog open={isModalOpen} onOpenChange={onClose}>
            <DialogContent className='bg-white text-black p-0 overflow-hidden'>
                <DialogHeader className='pt-8 pw-6'>
                    <DialogTitle className='text-2xl text-center font-bold'>
                        Inviter vos amis
                    </DialogTitle>
                </DialogHeader>
                <div className='p-6'>
                    <Label className='uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70'>
                        Liens d'invitation
                    </Label>
                    <div className='flex items-center mt-2 gap-x-2'>
                        <Input className='bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0' value="liens"/>
                        <Button size="icon">
                            <Copy className='w-4 h-4'/>
                        </Button>
                    </div>
                    <Button variant="link" size="sm" className='text-xs text-zinc-500 mt-4'>
                        Générer un nouveau lien
                        <RefreshCcw className='w-4 h-4 ml-2'/>
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}