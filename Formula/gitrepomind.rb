class Gitrepomind < Formula
  desc "Predict and find related files in your Git history using logical coupling"
  homepage "https://github.com/Veventii/GitRepoMind"
  version "0.1.0"
  license "MIT"

  if OS.mac?
    if Hardware::CPU.arm?
      url "https://github.com/Veventii/homebrew-veventii-tools/releases/download/v0.1.0/gitrepomind-v0.1.0-macos-arm64.tar.gz"
      sha256 "7a9969a8ab1bb17cef1b0475635e60ac0bdc9757c8acbbd30d5f78ce08e37d9f"
    else
      url "https://github.com/Veventii/homebrew-veventii-tools/releases/download/v0.1.0/gitrepomind-v0.1.0-macos-x86_64.tar.gz"
      sha256 "5abe252f733f2ccdd1aa5a8d5c0ff7180dea915724dcedc7429986887762e2da"
    end
  end

  def install
    bin.install "gitrepomind"
  end

  test do
    system "#{bin}/gitrepomind", "--version"
  end
end
