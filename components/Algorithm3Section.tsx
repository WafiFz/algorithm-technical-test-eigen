"use client";

import { useState } from "react";
import { countQueryMatched } from "../lib/algorithms/algorithm3";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function Algorithm3Section() {
  const [input, setInput] = useState(JSON.stringify(["xc", "dz", "bbb", "dz"]));
  const [query, setQuery] = useState(JSON.stringify(["bbb", "ac", "dz"]));
  const [result, setResult] = useState<number[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const parsedInput = JSON.parse(input);
      const parsedQuery = JSON.parse(query);
      const newResult = countQueryMatched(parsedInput, parsedQuery);
      setResult(newResult);
    } catch (error) {
      console.error("Invalid JSON input");
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto mt-8">
      <CardHeader>
        <CardTitle>Algorithm 3: Count Query Matched</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="input" className="text-sm font-medium">
              Input Array (JSON):
            </label>
            <Textarea
              id="input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='["xc", "dz", "bbb", "dz"]'
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="query" className="text-sm font-medium">
              Query Array (JSON):
            </label>
            <Textarea
              id="query"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder='["bbb", "ac", "dz"]'
            />
          </div>
          <Button type="submit">Count Matched</Button>
        </form>
        <div className="mt-4">
          <p className="text-sm font-medium">
            Result:{" "}
            <span className="font-mono bg-muted p-1 rounded">
              {JSON.stringify(result)}
            </span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
