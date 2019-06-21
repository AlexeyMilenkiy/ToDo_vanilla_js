function Task (value) {
    this.id = new Date().getTime();
    this.isComplete = false;
    this.value = value;
}
