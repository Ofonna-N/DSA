class NodeCustom {
  public value = 0;
  public next: NodeCustom | null = null;
  constructor(value: number) {
    this.value = value;
  }
}

export default NodeCustom;
