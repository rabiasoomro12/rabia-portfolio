export type ChatMessage = {
  role: 'assistant' | 'user';
  text: string;
};

/**
 * UI-safe placeholder for the future assistant service.
 * Replace this function with the OpenAI-backed request when the API is connected.
 */
export async function getAssistantResponse(question: string): Promise<string> {
  await new Promise((resolve) => window.setTimeout(resolve, 450));
  const normalized = question.toLowerCase();

  if (normalized.includes('project') || normalized.includes('work')) {
    return 'Rabia’s work spans deep learning, computer vision, FPGA systems, robotics, and data visualization. Open a project above to explore the available context.';
  }
  if (normalized.includes('research') || normalized.includes('paper')) {
    return 'Her research interests include computer vision, deep learning, transfer learning, and intelligent systems. The research ledger above is the best place to begin.';
  }
  if (normalized.includes('contact') || normalized.includes('email')) {
    return 'You can reach Rabia through the contact links below. For now, the email address is kept editable in one central configuration file.';
  }

  return 'I can help you explore Rabia’s projects, research, skills, or experience. Ask me about one of those threads.';
}