"use client";

import { useState } from "react";
import { diagonalDifference } from "../lib/algorithms/algorithm4";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function Algorithm4Section() {
  const [matrix, setMatrix] = useState(
    JSON.stringify([
      [1, 2, 0],
      [4, 5, 6],
      [7, 8, 9],
    ])
  );
  const [result, setResult] = useState<number | string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const parsedMatrix = JSON.parse(matrix);
      const difference = diagonalDifference(parsedMatrix);
      setResult(difference);
    } catch (error) {
      console.error("Invalid JSON input");
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto mt-8">
      <CardHeader>
        <CardTitle>Algorithm 4: Diagonal Difference</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="matrix" className="text-sm font-medium">
              Matrix (JSON):
            </label>
            <Textarea
              id="matrix"
              value={matrix}
              onChange={(e) => setMatrix(e.target.value)}
              placeholder="[[1, 2, 0], [4, 5, 6], [7, 8, 9]]"
            />
          </div>
          <Button type="submit">Calculate Difference</Button>
        </form>
        {result !== null && (
          <div className="mt-4">
            <p className="text-sm font-medium">
              Result:{" "}
              <span className="font-mono bg-muted p-1 rounded">{result}</span>
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
