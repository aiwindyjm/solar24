/**
 * 生产内容知识引用校验（validate.ts 调用方逻辑的纯函数化，2026-09-18 复核收口引入）
 *
 * 规则：approved 内容的 knowledge_ids 引用的卡必须——
 * ① 整体可发布（assertKnowledgeUsableForTerm：approved+human_review+非争议+claim 类型）；
 * ② 属于本节气，或为系统级共享知识（solar_terms 为空）且文件位于 02_shared/ 目录。
 * 返回 null 表示通过；返回错误消息字符串表示拒绝原因。
 */
import { assertKnowledgeUsableForTerm } from '../packages/protocol/src/index.js';
import type { KnowledgeNote } from '../packages/protocol/src/index.js';

export function knowledgeReferenceProblem(
  note: KnowledgeNote,
  notePath: string,
  slug: string,
): string | null {
  try {
    assertKnowledgeUsableForTerm(note, slug);
  } catch (err) {
    return (err as Error).message;
  }
  if (note.solar_terms.length === 0 && !notePath.replace(/\\/g, '/').includes('02_shared/')) {
    return `Shared knowledge must live in 02_shared/: ${note.id}`;
  }
  return null;
}
