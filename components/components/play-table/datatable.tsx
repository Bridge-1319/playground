import { Training } from "@/app/og/home/training/page";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import { MoreHorizontal } from "lucide-react";

interface DataTableProps{
    data: Training[]
}
export const DataTable = ({ data }:DataTableProps) => {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Priority</TableHead>
                    <TableHead>Course Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Skill</TableHead>
                    <TableHead>Skill Level</TableHead>
                    <TableHead>Updated By</TableHead>
                    <TableHead>Completion Date</TableHead>
                    <TableHeader className="w-[100px]"/>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((training, index) => (
                    <TableRow key={index}>
                        <TableCell>{training.priority}</TableCell>
                        <TableCell>{training.courseName}</TableCell>
                        <TableCell>{training.status}</TableCell>
                        <TableCell>{training.skill}</TableCell>
                        <TableCell>{training.skillLevel}</TableCell>
                        <TableCell>{training.updatedBy}</TableCell>
                        <TableCell>{training.completionDate}</TableCell>
                        <TableCell className="text-right">
                                <Button variant="ghost" className="ml-auto flex h-8 w-8 p-0">
                                    <MoreHorizontal className="h-4 w-4"/>
                                </Button>
                            </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>    
    )
}

