import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { readNote } from '../scripts/knowledge.js';
import {
  snapshotPayload,
  payloadHash,
  renderSnapshot,
  currentBlock,
} from '../scripts/lichun-snapshot.js';

/**
 * 立春首版三方一致性（2026-09-18 复核收口）：
 * 负责人读到的（审核包快照）＝批准对应的＝未来生产使用的（解释卡权威字段）。
 * 权威字段或快照任一侧单独变化都必须在此失败。
 */
const PKG = 'docs/research/lichun-minimum-content-review-package.md';

describe('lichun authoritative-snapshot consistency', () => {
  const payload = snapshotPayload(readNote('knowledge-base/03_notes/lichun-human-explanation.md') as never);
  const pkgText = readFileSync(PKG, 'utf8').replace(/\r\n/g, '\n');

  it('审核包快照与权威字段逐字一致（含哈希）', () => {
    const block = currentBlock(pkgText);
    expect(block, 'SNAPSHOT 标记缺失').not.toBeNull();
    expect(block).toBe(renderSnapshot(payload));
  });

  it('记录的哈希等于当前权威字段哈希', () => {
    const block = currentBlock(pkgText) ?? '';
    const recorded = block.match(/sha256: ([0-9a-f]{64})/)?.[1];
    expect(recorded).toBe(payloadHash(payload));
  });

  it('权威字段变化会被发现（哈希随内容变化）', () => {
    const tampered = structuredClone(payload);
    tampered.why_it_matters.zh = tampered.why_it_matters.zh + '（随意追加）';
    expect(payloadHash(tampered)).not.toBe(payloadHash(payload));
    expect(renderSnapshot(tampered)).not.toBe(renderSnapshot(payload));
  });

  it('快照被单独改写会被发现（渲染块不再相等）', () => {
    const block = currentBlock(pkgText) ?? '';
    const tamperedBlock = block.replace('立春是二十四节气的第一个', '立春是二十四节气之首（被篡改）');
    expect(tamperedBlock).not.toBe(block);
    expect(tamperedBlock).not.toBe(renderSnapshot(payload));
  });
});
