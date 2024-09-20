"use client";

import { useState } from "react";
import { reverseAlphabets } from "../../algorithms/algorithm1";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";

export function Algorithm1Section() {
  const [input, setInput] = useState("NEGIE1");
  const [result, setResult] = useState(reverseAlphabets("NEGIE1"));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setResult(reverseAlphabets(input));
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Algorithm 1: Reverse Alphabets</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="input" className="text-sm font-medium">
              Input:
            </label>
            <Input
              id="input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter string (e.g., NEGIE1)"
            />
          </div>
          <Button type="submit">Reverse</Button>
        </form>
        <div className="mt-4">
          <p className="text-sm font-medium">
            Output:{" "}
            <span className="font-mono bg-muted p-1 rounded">{result}</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
