class Gitrepomind < Formula
  desc "Predict and find related files in your Git history using logical coupling"
  homepage "https://github.com/Veventii/GitRepoMind"
  url "https://static.crates.io/crates/gitrepomind/gitrepomind-0.1.0.crate"
  sha256 "70a9a709e1199aa0fb65cbb87c2c0363b4c413009517ad586bbc62697987876c"
  license "MIT"

  depends_on "rust" => :build

  def install
    system "cargo", "install", *std_cargo_args
  end

  test do
    system "#{bin}/gitrepomind", "--version"
  end
end
