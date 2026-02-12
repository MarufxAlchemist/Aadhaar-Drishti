// Share dialog component for exporting and sharing dashboard insights
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, Check, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ShareDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    url: string;
}

export function ShareDialog({ open, onOpenChange, url }: ShareDialogProps) {
    const [copied, setCopied] = useState(false);
    const { toast } = useToast();

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            toast({
                title: "Link copied!",
                description: "The shareable link has been copied to your clipboard.",
            });
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            toast({
                title: "Failed to copy",
                description: "Please copy the link manually.",
                variant: "destructive",
            });
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <Share2 className="w-5 h-5" />
                        Share Dashboard
                    </DialogTitle>
                    <DialogDescription>
                        Share this view with others. The link includes your current filter settings.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                    <div className="grid flex-1 gap-2">
                        <Input
                            readOnly
                            value={url}
                            className="font-mono text-sm"
                            onClick={(e) => e.currentTarget.select()}
                        />
                    </div>
                    <Button
                        type="button"
                        size="sm"
                        className="px-3"
                        onClick={handleCopy}
                    >
                        {copied ? (
                            <>
                                <Check className="h-4 w-4" />
                                <span className="sr-only">Copied</span>
                            </>
                        ) : (
                            <>
                                <Copy className="h-4 w-4" />
                                <span className="sr-only">Copy</span>
                            </>
                        )}
                    </Button>
                </div>
                <div className="text-xs text-muted-foreground">
                    Anyone with this link can view the dashboard with the same filters applied.
                </div>
            </DialogContent>
        </Dialog>
    );
}
