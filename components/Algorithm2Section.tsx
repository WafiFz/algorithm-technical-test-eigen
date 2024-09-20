"use client";

import { useState } from "react";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { findLongestWord } from "@/lib/algorithms/algorithm2";

export function Algorithm2Section() {
  const [input, setInput] = useState("Saya sangat senang mengerjakan soal algoritma");
  const [result, setResult] = useState(findLongestWord("Saya sangat senang mengerjakan soal algoritma"));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setResult(findLongestWord(input));
  };

  return (
    <Card className="w-full max-w-md mx-auto mt-8">
      <CardHeader>
        <CardTitle>Algorithm 2: Find Longest Word</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="input" className="text-sm font-medium">
              Input Sentence:
            </label>
            <Input
              id="input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter a sentence"
            />
          </div>
          <Button type="submit">Find Longest Word</Button>
        </form>
        <div className="mt-4">
          <p className="text-sm font-medium">
            Longest Word: <span className="font-mono bg-muted p-1 rounded">{result}</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
